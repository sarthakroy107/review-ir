//components/modal.tsx
"use client";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogOverlay } from "./ui/dialog";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={() => router.back()}>
      <DialogOverlay>
        <DialogContent className="w-fit py-9 px-7">{children}</DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
