import { removeFromCart } from "@/app/shop/[id]/actions";
import { BsTrash } from "react-icons/bs";
import { toast } from "sonner";

export default function DeleteFromCartBtn({ id }: { id: string }) {
  return (
    <button
      onClick={() =>
        toast("My toast", {
          className: "my-classname",
          description: "My description",
          duration: 5000,
          icon: <BsTrash />,
        })
      }
    >
      <BsTrash size={19} fill="#B88E2F" />
    </button>
  );
}
