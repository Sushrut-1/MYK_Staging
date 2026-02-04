export function getUniqueUser() {
  const time = Date.now();
  return {
    name: `User_${time}`,
    email: `user_${time}@gmail.com`,
    mobile: `9${Math.floor(100000000 + Math.random() * 900000000)}`,
    occupation: 'Homeowners',
    city: 'Pune',
    message: 'This is an automation test enquiry'
  };
}
