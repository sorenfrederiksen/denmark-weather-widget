const dummyData = ['Høje-Taastrup Kommune', 'Nyborg Kommune', 'Kolding Kommune', 'Sherrebek', 'Middelfart', 'Ejby'];

export default async function getCityList() {
  return await new Promise((resolve) => resolve(dummyData));
}
