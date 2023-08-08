"use client";

import axios from "axios";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useProModal } from "@/hooks/useProModal";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const ProModal = () => {
  const proModal = useProModal();
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (err) {
      toast({
        variant: "destructive",
        description: `Something went wrong: ${err}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={proModal.isOpen}
      onOpenChange={proModal.onClose}
    >
      <DialogContent>
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-center">Upgrade to Pro</DialogTitle>
          <DialogDescription className="text-center space-y-2">
            Create <span className="text-sky-500 mx-1 font-medium">Custom AI</span>Companions!
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <div className="flex justify-between">
          <p className="text-2xl font-medium">
            $9
            <span className="text-sm font-normal">.99 / mo</span>
          </p>
          <Button
            onClick={onSubscribe}
            disabled={loading}
            variant="premium"
          >
            Subscribe
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
