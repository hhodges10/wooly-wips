import { ProjectData } from '../../../lib/projects';
import Button, { ButtonVariant } from '../ui/button';
import Modal from '../ui/modal';

export default function AddProjectModal({
  isOpen,
  onAddProject,
  onCloseModal,
}: {
  isOpen: boolean;
  onAddProject: (newProject: ProjectData) => Promise<void>;
  onCloseModal: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onCloseModal}>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold mb-4">Add New Project</h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const title = (
              form.elements.namedItem('projectTitle') as HTMLInputElement
            ).value;
            const description = (
              form.elements.namedItem(
                'projectDescription'
              ) as HTMLTextAreaElement
            ).value;
            await onAddProject({ title, description });
          }}
        >
          <input
            type="text"
            name="projectTitle"
            placeholder="Project Title"
            className="border border-text/50 p-2 rounded"
          />
          <textarea
            name="projectDescription"
            placeholder="Project Description"
            className="border border-text/50 p-2 rounded"
          />
          <div className="flex justify-end gap-2">
            <Button variant={ButtonVariant.primaryGhost} onClick={onCloseModal}>
              Cancel
            </Button>
            <Button variant={ButtonVariant.primarySolid} type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
