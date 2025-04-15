import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  ...authTables,
  games: defineTable({
    playerCount: v.number(),
  }),
  players: defineTable({
    name: v.string(),
    gameId: v.id("games"),
  }).index("by_game", ["gameId"]),
});
