import { toast } from "react-hot-toast";

import { deleteSelectedService } from "entities/Service";
import { useAppDispatch } from "shared";

export const useSelectedServiceDelete = () => {
  const dispatch = useAppDispatch();

  const removeSelectedService = (id: string | number) => {
    dispatch(deleteSelectedService(id));
    toast.success("Dienst entfernt!");
  };

  return { removeSelectedService };
};
