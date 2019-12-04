export class LegacyAdaptee implements IAdaptee {
  public do() {
    this.oldRequest();
  }

  public oldRequest(): void {
    console.log("Making a request to legacy external code...");
  }
}
