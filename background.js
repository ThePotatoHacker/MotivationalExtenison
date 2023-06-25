function showMotivationalQuote() {
  // Get a random quote 
  const quote = "Your motivational quote goes here.";

  // Display the quote in a notification
  const notificationOptions = {
    type: "basic",
    iconUrl: "Edu.png",
    title: "Motivational Quote",
    message: quote
  };
  chrome.notifications.create("", notificationOptions, () => {});
}

chrome.alarms.create("motivationalAlarm", {
  periodInMinutes: 15
});

chrome.alarms.onAlarm.addListener(alarm => {
  if (alarm.name === "motivationalAlarm") {
    showMotivationalQuote();
  }
});