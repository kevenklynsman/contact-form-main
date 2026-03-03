import { toast } from "react-toastify";

function SuccessToastContent({ message }: { message: string }) {
  return (
    <div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-white font-semibold">{message}</span>
        <span className="text-white/80 text-sm">
          Mensagem enviada com sucesso
        </span>
      </div>
    </div>
  );
}

export default function showToast(message: string) {
  toast.success(<SuccessToastContent message={message} />, {
    position: "top-center",
    autoClose: 3000,
    closeButton: false,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: undefined,
    draggable: true,
    className: "success-toast",
    progress: undefined,
    icon: () => <img src="/assets/images/icon-success-check.svg" alt="Success" />,
  });
}
