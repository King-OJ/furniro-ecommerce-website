"use client";
import { usePathname } from "next/navigation";
import { useTransition } from "react";
import { BsTrash } from "react-icons/bs";
import { toast } from "sonner";

export default function DeleteFromCartBtn({
  productId,
  removeFromCart,
  Icon,
}: {
  productId: string;
  removeFromCart: (productId: string, path: string) => Promise<void>;
  Icon?: React.ElementType;
}) {
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => {
        startTransition(async () => {
          await removeFromCart(productId, pathname);
          toast("Item was removed from cart", {
            duration: 5000,
            icon: <BsTrash />,
          });
        });
      }}
      disabled={isPending}
      className="flex items-center space-x-1"
    >
      <Icon size={19} fill="#B88E2F" />
      {isPending && <span className="loading loading-spinner"></span>}
    </button>
  );
}
