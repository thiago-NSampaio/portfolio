import { Modal } from "./modal";

interface StatsModalProps{
    closeStatsModal: ()=> void;
}

export function StatsModal({closeStatsModal}:StatsModalProps) {
  return (
   <Modal titleModal="Meus indices nas linguagens e frameworks" subtitleModal="" closeModal={closeStatsModal}>
        <div className="bg-zinc-600 h-full">
        
        </div>
   </Modal>
  );
}
