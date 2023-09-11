import { Page } from "@/types";
import { SupabaseClient } from '@supabase/supabase-js'

interface PagesFacade{
  getPages(): Promise<Page[]>
}


export class PageSupabse implements PagesFacade{
  constructor(private client: SupabaseClient){}
  async getPages() {
    const { data } = await this.client.from('clients').select('*').throwOnError()

    return data as Page[]
  }
}
