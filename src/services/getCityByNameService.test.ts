import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";
import { mockCityAPIResponse } from "@__tests__/mocks/mockCityAPIResponse";

describe("Service: getCityByNameService", () => {
  it("should return city details | deve retornar detalhes da cidade", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });

    const response = await getCityByNameService("São Paulo");

    expect(response.length).toBeGreaterThan(0);
  });
});