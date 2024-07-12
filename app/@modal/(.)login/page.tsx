//app/@modal/(.)login/page.tsx
import { LoginForm } from "@/components/login-form";
import { Modal } from "@/components/modal";

export default function Page() {
  return (
    <Modal>
      <LoginForm />
    </Modal>
  );
}
