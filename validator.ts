interface validator {
  error: boolean;
  msg: string;
}
const nameValidator = (name: any): validator => {
  if (name.length === 0) {
    return {
      error: true,
      msg: "Name can not be empty",
    };
  } else if (name.length > 40) {
    return {
      error: true,
      msg: "Name can not be more than 40 characters",
    };
  } else if (/^[A-Za-z\s]*$/.test(name) === false) {
    return {
      error: true,
      msg: "Name can only contain letters and space",
    };
  } else {
    return {
      error: false,
      msg: "",
    };
  }
};

const dropdownValidator = (field: any, value: any, options: any): validator => {
  let optionValues = options.map((ele: any) => ele.id);
  if (value === undefined) {
    value = "";
  }
  if (value.toString().length === 0) {
    return {
      error: true,
      msg: field.charAt(0).toUpperCase() + field.slice(1) + " can not be empty",
    };
  } else if (optionValues.indexOf(value.toString()) === -1) {
    return {
      error: true,
      msg: "Please select correct value from the list",
    };
  } else {
    return {
      error: false,
      msg: "",
    };
  }
};

const emailValidator = (email: any): validator => {
  if (email.length === 0) {
    return {
      error: true,
      msg: "Email can not be empty",
    };
  } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) === false) {
    return {
      error: true,
      msg: "Please enter a valid email",
    };
  } else {
    return {
      error: false,
      msg: "",
    };
  }
};

const phoneValidator = (phone: any): validator => {
  if (phone.length === 0) {
    return {
      error: false,
      msg: "",
    };
  } else if (phone.length < 6) {
    return {
      error: true,
      msg: "Phone number can not be less than 6 digits",
    };
  } else if (phone.length > 15) {
    return {
      error: true,
      msg: "Phone number can not be more than 15 digits",
    };
  } else if (/^[0-9]+$/.test(phone) === false) {
    return {
      error: true,
      msg: "Phone number can only contain numbers",
    };
  } else {
    return {
      error: false,
      msg: "",
    };
  }
};

const textareaValidator = (message: any, len: number): validator => {
  if (message.length === 0) {
    return {
      error: true,
      msg: "Message can not be empty",
    };
  } else if (message.length < 10) {
    return {
      error: true,
      msg: "Message should have atleast 10 characters",
    };
  } else {
    return {
      error: false,
      msg: "",
    };
  }
};

const textValidator = (field: any, value: any): validator => {
  if (value.length === 0) {
    return {
      error: true,
      msg: field + " can not be empty",
    };
  } else if (value.length < 3) {
    return {
      error: true,
      msg: field + " should have atleast 3 characters",
    };
  } else {
    return {
      error: false,
      msg: "",
    };
  }
};

const emptyValidator = (value: any): validator => {
  if (value.length === 0) {
    return {
      error: true,
      msg: "Please enter mobile/email",
    };
  } else {
    return {
      error: false,
      msg: "",
    };
  }
};

export {
  nameValidator,
  dropdownValidator,
  emailValidator,
  phoneValidator,
  textareaValidator,
  textValidator,
  emptyValidator,
};
