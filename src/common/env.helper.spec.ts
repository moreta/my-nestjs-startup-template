import { getEnvFilePath } from "./env.helper"

describe("env.helper", () => {
  it("should be defined", () => {
    const envFilePath = getEnvFilePath()
    expect(envFilePath).toEqual([".env", ".env.test"])
  })
})
