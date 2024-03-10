import CreateEventForm from "@/app/(events)/create-event";
import { Separator } from "@/components/ui/separator";


const CreateEvent = () => {
  return <div className="">
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-medium">Create Event</h1>
    </div>
    <Separator className="my-3" />
    <CreateEventForm />
  </div>;
};
export default CreateEvent;
