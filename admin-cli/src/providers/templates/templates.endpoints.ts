import { environment_client } from '../../environments/environment';

export class TemplateEndPoints {
  public static saveTemplate = `${environment_client.API_URL}/mkhtml`;
}
