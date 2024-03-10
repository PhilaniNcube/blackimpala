import { uploadEventImage } from "@/action/images";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const EventImageUpload = ({slug}:{slug:string}) => {




  return (
			<form className="max-w-xl" action={uploadEventImage}>
				<Label htmlFor="image">Upload Event Image or Poster</Label>
				<Input type="file" name="image" id="image" />
				<Input type="hidden" name="slug" id="slug" defaultValue={slug} />
				<Separator className="my-3" />
				<SubmitButton pendingText="Uploading...">Upload</SubmitButton>
			</form>
		);
};
export default EventImageUpload;
