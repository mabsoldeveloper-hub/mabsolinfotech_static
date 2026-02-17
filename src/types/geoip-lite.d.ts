declare module "geoip-lite" {
  interface Geo {
    range?: [number, number];
    country?: string;
    region?: string;
    eu?: string;
    timezone?: string;
    city?: string;
    ll?: [number, number];
    metro?: number;
    area?: number;
  }

  function lookup(ip: string): Geo | null;

  export default { lookup };
}
