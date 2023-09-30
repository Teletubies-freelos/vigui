import { Benefit, Page, Horary, KnowUsData, Plan } from "@/types";
import { SupabaseClient } from '@supabase/supabase-js'

interface Info{
  title: string;
  description: string;
}
interface AboutUs{
  first:Info,
  second:Info
}
interface DataFacade{
  getPages(): Promise<Page[]>;
  getBenefits(): Promise<Benefit[]>;
  getAboutUs():Promise<AboutUs>;
  getInternetPlans(): Promise<Plan[]>;
}


export class DataSupabse implements DataFacade{
  constructor(private client: SupabaseClient){}

  async getInternetPlans(): Promise<Plan[]> {
    const { data } = await this.client
    .from('internet_plans')
    .select("*")
    .throwOnError();

    if(!data)
      throw new Error('no data')

    const [ aboutUs ] = data

    return aboutUs 
  }

  async getAboutUs(){
    const { data } = await this.client
      .from('about_us')
      .select("*")
      .throwOnError();

    if(!data)
      throw new Error('no data'
    )

    const [ aboutUs ] = data

    return aboutUs as AboutUs
  }

  async getPages() {
    const { data } = await this.client
      .from('clients')
      .select('*')
      .throwOnError()

    return data as Page[]
  }

  async getBenefits(){
    const { data } = await this.client
      .from('benefits')
      .select('*')
      .throwOnError()

    return data as Benefit[]
  }
  async getHorary(){
    const { data } = await this.client
      .from('horary')
      .select('*')
      .throwOnError()

    return data as Horary[]
  }
  async getKnowUs(){
    const { data } = await this.client
    .from('knowus')
    .select('*')
    .throwOnError()

    return data as KnowUsData[]
  }
  async getContactInfo() {
    const { data } = await this.client
      .from('contactinfo')
      .select('*')
      .throwOnError()

    return data as ContactInfo[]
  }
}
