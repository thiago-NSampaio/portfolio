import { useEffect, useState } from "react";
import { Modal } from "./modal";
import { getGithubStats } from "../utils/getStatsGithub";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface StatsModalProps {
  closeStatsModal: () => void;
}

interface GithubStats {
  languages: { [key: string]: number };
  commits: Array<{
    repo: string;
    message: string;
    date: string;
  }>;
  monthlyCommits: number;
}

export function StatsModal({ closeStatsModal }: StatsModalProps) {
  const [stats, setStats] = useState<GithubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      const data = await getGithubStats();
      setStats(data);
      setLoading(false);
    }
    fetchStats();
  }, []);

  if (loading) {
    return (
      <Modal
        titleModal="Meus índices nas linguagens e frameworks"
        subtitleModal=""
        closeModal={closeStatsModal}
      >
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white" />
        </div>
      </Modal>
    );
  }

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#82ca9d",
  ];

  const chartData = stats?.languages
    ? Object.entries(stats.languages)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 6)
        .map(([name, value]) => ({
          name,
          value: Math.round(value / 1000),
        }))
    : [];

  return (
    <Modal
      titleModal="Análise de Código no GitHub"
      subtitleModal={`Total de commits este mês: ${stats?.monthlyCommits || 0}`}
      closeModal={closeStatsModal}
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Distribuição de Linguagens:</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  label={({ name, value }) => `${name}: ${value}kb`}
                >
                  {chartData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {chartData.map(({ name, value }, index) => (
              <div
                key={name}
                className="flex items-center justify-between p-2 bg-zinc-700/50 rounded"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span>{name}</span>
                </div>
                <span>{value}kb</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
