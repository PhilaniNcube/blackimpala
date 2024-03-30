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


export async function getEvents(page=1, limit=20) {

  const supabase = createClient();

  const start = (page - 1) * limit;
  const end = start + limit;

  try {

    const {
      data,
      error,
      count
    } = await supabase.from('events').select('*',  { count: 'exact', head: false }).order('date', {
      ascending: true
    }).range(start, end);

    if (error) {
      return {
        events: null,
        count: 0,
        error: error.message
      };
    }

    return {
      events: data,
      count: count || 0,
      error: null
    }

  } catch (error) {

    return {
      events: null,
      count:0,
      error: "An error occurred while fetching events"
    };

  }

}


export async function getEvent(slug:string) {

    const supabase = createClient();

    try {

      const {
        data,
        error
      } = await supabase.from('events').select('*').eq('slug', slug).single();

      if (error) {
        return {
          event: null,
          error: error.message
        };
      }

      return {
        event: data,
        error: null
      }

    } catch (error) {

      return {
        event: null,
        error: "An error occurred while fetching event"
      };

    }
}
