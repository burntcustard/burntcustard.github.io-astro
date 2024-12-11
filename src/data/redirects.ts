import { type AstroUserConfig } from "astro";

const redirects: AstroUserConfig['redirects'] = {
  'owlbear': {
    status: 303,
    destination: 'https://www.owlbear.rodeo/room/MTQZ-TR92MrX/TheNewGnome',
  },
}

export default redirects;
