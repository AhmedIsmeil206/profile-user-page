export const formatPhoneNumber = (phoneNumber) => {
    // Format phone number to (XXX) XXX-XXXX
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  };
  