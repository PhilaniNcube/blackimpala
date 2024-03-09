import { createClient } from "@/utils/supabase/server";

export async function getWeeklyEvents() {
  // intialize the supabase server client
  const supabase = createClient();

  try {
    // fetch the weekly events from the database
    const { data, error } = await supabase.from('weekly_events').select('*');

    // if there is an error, return the error
    if (error) {
      return {
        events: null,
        error: error.message
      };
    }

    // return the weekly events
    return {
      events: data,
      error: null
    }

  } catch (error) {
    // return an error message
    return {
      events: null,
      error: "An error occurred while fetching weekly events"
    };

  }

}
