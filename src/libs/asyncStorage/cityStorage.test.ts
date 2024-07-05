import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from "@libs/asyncStorage/cityStorage";

import { CityProps } from "@services/getCityByNameService";

const newCity: CityProps = {
  id: "1",
  name: "São Paulo",
  latitude: 123,
  longitude: 456,
};

describe("Storage: CityStorage", () => {
  it("should be return null when don't have a city storaged | deve retornar null quando não tiver uma cidade armazenada", async () => {
    const response = await getStorageCity();

    expect(response).toBeNull();
  });

  it("should be return city storaged | deve ser devolvido ao armazenamento da cidade", async () => {
    await saveStorageCity(newCity);

    const response = await getStorageCity();

    expect(response).toEqual(newCity);
  });

  it("should be remove city storage", async () => {
    await saveStorageCity(newCity);
    await removeStorageCity();

    const response = await getStorageCity();

    expect(response).toBeNull();
  });
});
