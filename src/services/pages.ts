import { Benefit, Page } from "@/types";
import { SupabaseClient } from '@supabase/supabase-js'

interface DataFacade{
  getPages(): Promise<Page[]>;
  getBenefits(): Promise<Benefit[]>;
}


export class DataSupabse implements DataFacade{
  constructor(private client: SupabaseClient){}
  async getPages() {
    const { data } = await this.client.from('clients').select('*').throwOnError()

    return data as Page[]
  }

  async getBenefits(){
    const { data } = await this.client.from('benefits').select('*').throwOnError()

    return data as Benefit[]
  }
}
