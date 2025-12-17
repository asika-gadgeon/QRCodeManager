import Form, { type FormField } from "../../components/common/qrForm/QRForm";
import Modal from "../../components/common/Modal";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function DomainForm({ open, onClose }: Props) {
  const fields: FormField[] = [
    {
      name: "domain",
      label: "Domain (URL)",
      placeholder: "https://example.com",
      type: "text",
      required: true,
    },
    {
      name: "subdomain",
      label: "Subdomain",
      placeholder: "www, api, cdn",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Enter description",
    },
  ];

  const handleSave = (values: Record<string, string>) => {
    console.log("Domain Form Values:", values);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title="Add New Domain">
      <Form
        key={open ? "open" : "closed"}
        fields={fields}
        onSave={handleSave}
      />
    </Modal>
  );
}
