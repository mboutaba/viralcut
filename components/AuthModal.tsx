"use client";

export default function AuthModal({
    isOpen,
    onClose,
    children,
}: {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center  justify-center">
            {/* Background blur + overlay */}
            <div
                className="absolute inset-0 bg-black/55 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="p-6  ">
                {children}
            </div>
        </div>
    );
}
