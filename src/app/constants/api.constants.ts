import { environment } from "../environments/environment.prod";


export const API_URLS = {
  ARTICLE: {
    BASE: `${environment.api}/article`,
    CREATE: `${environment.api}/article/create`,
    GET_ARTICLES: `${environment.api}/article/get-articles`,
    VIEW_ARTICLE: `${environment.api}/article/view-article`,
    GET_INDIVIDUAL_ARTICLES: `${environment.api}/article/get-individual-articles`,
    EDIT_ARTICLE: `${environment.api}/article/edit-article`,
    DELETE_ARTICLE: `${environment.api}/article`,
  },
  AUTH: {
    BASE: `${environment.api}/auth`,
    REGISTER: `${environment.api}/auth/register`,
    LOGIN: `${environment.api}/auth/login`,
  },
  USER: {
    BASE: `${environment.api}/user`,
    GET_USER_DATA: `${environment.api}/user/get-user-data`,
  },
};
