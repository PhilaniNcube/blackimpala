"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "@/components/submit-button";
import { Separator } from "@/components/ui/separator";
import { useFormState } from "react-dom";
import { createEvent } from "@/action/events";
import { startTransition } from "react";

const formSchema = z.object({
  date: z.date(),
  title: z.string(),
  description: z.string(),
  location: z.string(),
  time: z.string(),
  price: z.string(),
})

const initialState = {
  message: "",
  event_slug: "",
}

const CreateEventForm = () => {

   const [state, formAction] = useFormState(createEvent, initialState);



    const form = useForm<z.infer<typeof formSchema>>({
					resolver: zodResolver(formSchema),
					defaultValues: {

					},
				});

     async function onSubmit(values: z.infer<typeof formSchema>) {

						const formData = new FormData();



						formData.append("date", values.date.toISOString());
						formData.append("title", values.title);
						formData.append("description", values.description);
						formData.append("location", values.location);
						formData.append("time", values.time);
						formData.append("price", values.price);

            await formAction(formData);


					}

	return (
		<div className="w-full">
			<Form {...form}>
				<form  onSubmit={form.handleSubmit(onSubmit)} className="w-full px-2">
        <p className="text-sm text-red-600">{state?.message}</p>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Event Title</FormLabel>
									<FormControl>
										<Input placeholder="Event title" {...field} />
									</FormControl>

								</FormItem>
							)}
						/>{" "}
						<FormField
							control={form.control}
							name="location"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Event Venue</FormLabel>
									<FormControl>
										<Input placeholder="Event venue" {...field} />
									</FormControl>

								</FormItem>
							)}
						/>
						<div className="grid grid-cols-1 col-span-2 gap-8 md:grid-cols-3">
							<FormField
								control={form.control}
								name="date"
								render={({ field }) => (
									<FormItem className="flex flex-col ">
										<FormLabel className="mb-[10px]">Event Date</FormLabel>
										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<Button
														variant={"outline"}
														className={cn(
															"pl-3 text-left font-normal",
															!field.value && "text-muted-foreground",
														)}
													>
														{field.value ? (
															format(field.value, "PPP")
														) : (
															<span>Pick a date</span>
														)}
														<CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
													</Button>
												</FormControl>
											</PopoverTrigger>
											<PopoverContent className="w-auto p-0" align="start">
												<Calendar
													mode="single"
													selected={
														field.value ? new Date(field.value) : undefined
													}
													onSelect={field.onChange}
													disabled={(date) =>
														date < new Date() || date < new Date("1900-01-01")
													}
													initialFocus
												/>
											</PopoverContent>
										</Popover>

                   <FormMessage>{form.formState.errors.date?.message}</FormMessage>
									</FormItem>
								)}
							/>{" "}
							<FormField
								control={form.control}
								name="time"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Event Time</FormLabel>
										<FormControl>
											<Input type="time" placeholder="Event time" {...field} />
										</FormControl>

									</FormItem>
								)}
							/>{" "}
							<FormField
								control={form.control}
								name="price"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Event Price</FormLabel>
										<FormControl>
											<Input placeholder="" type="number" {...field} />
										</FormControl>

									</FormItem>
								)}
							/>
						</div>{" "}
						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Event Description</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Tell us a little bit about yourself"
											className="resize-none"
											{...field}
										/>
									</FormControl>


								</FormItem>
							)}
						/>
					</div>
          <Separator className="my-3" />
					<div className="">

						<SubmitButton>Submit</SubmitButton>
					</div>
				</form>
			</Form>
		</div>
	);
};
export default CreateEventForm;
