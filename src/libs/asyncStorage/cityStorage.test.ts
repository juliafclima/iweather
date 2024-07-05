import { getStorageCity } from "@libs/asyncStorage/cityStorage";

describe("Storage: CityStorage", () => {
  it("should be return null when don't have a city storaged | deve retornar null quando não tiver uma cidade armazenada", async () => {
    const response = await getStorageCity();

    expect(response).toBeNull();
  });
});
