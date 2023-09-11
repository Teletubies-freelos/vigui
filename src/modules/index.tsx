import { PageSupabse } from "@/services/pages";
import { createClient } from "@supabase/supabase-js";

const fakeUrl = 'https://pepeito.hola'

const fakeToken = Math.random()
  .toString()
  .substring(2)
  .split('')
  .reduce((prev, next, index, array)=> prev + next + (index%(Math.round(array.length/2))? '' : '.') , '')

export const supabaseClient = createClient(process.env.NEXT_SUPABASE_URL ?? fakeUrl, process.env.NEXT_SUPABASE_TOKEN ?? fakeToken)

export const pagesSingleton = new PageSupabse(supabaseClient)

