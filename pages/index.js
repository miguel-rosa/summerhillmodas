

import Home from './Home';
import Store from './Store';

import { STORE_GET } from '../services/api'

export async function getServerSideProps(context) {

 const SUBDOMAIN = context.req.headers.host.split('.')[0];
 
 let store = null;
 if(context.req.headers.host.split('.').length > 1) {
  const {url, options} = STORE_GET(SUBDOMAIN);
  const res = await fetch(url, options);
  if(res.status === 200) store = await res.json();
 }
 return {
  props: {data:store}
 }
}

export default function HomeChecker({data}) {
 return data ? <Store data={data}/> : <Home />
}