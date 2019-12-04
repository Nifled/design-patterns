export class HipAdaptee implements IAdaptee {
  public do() {
    this.specialNewRequest();
  }

  public specialNewRequest(): void {
    console.log("Making a specific special new request...");
  }
}
