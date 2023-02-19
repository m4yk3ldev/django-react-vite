const CAT_ENDPOINT_RANDOM_FACT = "http://127.0.0.1:8000/api/leads";

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT);
  const data = await res.json();
  console.log(data);
  return data;
};
