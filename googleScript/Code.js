var url = "https://us-central1-numerology-ae61d.cloudfunctions.net/onFormSubmit"

function onSubmit(event) {
  const formResponse = event.response;
  const itemResponses = formResponse.getItemResponses();
  const responses = itemResponses.map(ir => ir.getResponse());

  // Post the payload as JSON to our Cloud Function
  const response = UrlFetchApp.fetch(
      url,
      {
        "method": "post",
        "payload": JSON.stringify(responses)
      }
  );

  try {
    const result = JSON.parse(response.getContentText());
    console.log(result.props);
  } catch (e) {
    console.log(response);
  }
}

function submitEntryToGoogleForm() {

  let url = "https://docs.google.com/forms/d/e/1FAIpQLSeVeG62HoN-TdkcG1e5ZqxXWbHqqDcLmg-2-GPP4oFFFhbkeA/viewform?usp=pp_url&entry.239863662=%D7%90%D7%91%D7%99&entry.1504656714=%D7%9C%D7%91%D7%A7%D7%95%D7%91%D7%99%D7%A5&entry.297546406=%D7%99%D7%A2%D7%A7%D7%91&entry.92707367=%D7%98%D7%95%D7%91%D7%94&entry.958145638=1980-09-16&entry.1710948690=Male";

  let response = UrlFetchApp.fetch(url);
  console.log(response.getContentText());
}

function testOnSubmit() {
  var form = FormApp.openById("1cKaeHPu2S610vOzNLFatsx8qmLDg-38re0-LQ13652Q");
  var response = form.createResponse();

  const items = form.getItems();
  items.forEach(item => {
    switch (item.getTitle().toLowerCase()) {
      case "first name":
        response.withItemResponse(item.asTextItem().createResponse("אבי"));
        break;
      case "last name":
        response.withItemResponse(item.asTextItem().createResponse("לבקוביץ"));
        break;
      case "father name":
        response.withItemResponse(item.asTextItem().createResponse("יעקב"));
        break;
      case "mother name":
        response.withItemResponse(item.asTextItem().createResponse("טובה"));
        break;
      case "birthdate":
        response.withItemResponse(item.asDateItem().createResponse(new Date("1980-09-16T00:00:00.000Z")));
        break;
      case "gender":
        response.withItemResponse(item.asMultipleChoiceItem().createResponse("Male"));
        break;
    }
  })

  //  response: {
  //     birthDate: '1980-09-16T00:00:00.000Z',
  //     familyName: 'לבקוביץ',
  //     fatherName: 'יעקב',
  //     fatherNameAtBirthOfPatient: '',
  //     firstName: 'אבי',
  //     firstNameAtBirth: '',
  //     gender: 'male',
  //     motherName: 'טובה',
  //     motherNameAtBirthOfPatient: '',
  //     birthHour: false
  //   }

  const event = {
    response
  }

  onSubmit(event);
}
