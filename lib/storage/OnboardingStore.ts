class OnBoardingStore {
  onBoarding: string[] = [];

  add(value: string) {
    this.onBoarding.push(value);
    console.log("Added:", value);
    console.log("Current List:", this.onBoarding);
  }

  clear() {
    this.onBoarding = [];
    console.log("Cleared list:", this.onBoarding);
  }

  saveToLocal() {
    const jsonString = JSON.stringify(this.onBoarding);
    localStorage.setItem("onboardingData", jsonString);
    console.log("Saved to local:", jsonString);
  }

  loadFromLocal() {
    const raw = localStorage.getItem("onboardingData");
    console.log("Loaded raw:", raw);
    if (raw) {
      this.onBoarding = JSON.parse(raw);
      console.log("Parsed list:", this.onBoarding);
    }
  }

  getList() {
    console.log("Get List:", this.onBoarding);
    return this.onBoarding;
  }
}

// const onboardingStore = new OnBoardingStore();
// export default onboardingStore;

const onBoadingStore=new OnBoardingStore();
export default onBoadingStore;
