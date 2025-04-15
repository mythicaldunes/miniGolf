import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createGame = mutation({
  args: { playerCount: v.number() },
  handler: async (ctx, args) => {
    return await ctx.db.insert("games", { playerCount: args.playerCount });
  },
});

export const addPlayer = mutation({
  args: {
    name: v.string(),
    gameId: v.id("games"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("players", {
      name: args.name,
      gameId: args.gameId,
    });
  },
});
