// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateArticle {
  count: Int!
}

type Article {
  id: ID!
  author: String
  media: [ArticleMedia!]
  name: String
  postTime: String
  subtitles: [ArticleSubtitle!]
  texts: [ArticleText!]
  titles: [ArticleTitle!]
}

type ArticleConnection {
  pageInfo: PageInfo!
  edges: [ArticleEdge]!
  aggregate: AggregateArticle!
}

input ArticleCreateInput {
  id: ID
  author: String
  media: ArticleMediaCreateManyInput
  name: String
  postTime: String
  subtitles: ArticleSubtitleCreateManyInput
  texts: ArticleTextCreateManyInput
  titles: ArticleTitleCreateManyInput
}

type ArticleEdge {
  node: Article!
  cursor: String!
}

type ArticleMedia {
  position: Int
  url: String
}

input ArticleMediaCreateInput {
  position: Int
  url: String
}

input ArticleMediaCreateManyInput {
  create: [ArticleMediaCreateInput!]
}

input ArticleMediaRestrictedWhereInput {
  position: Int
  position_not: Int
  position_in: [Int!]
  position_not_in: [Int!]
  position_lt: Int
  position_lte: Int
  position_gt: Int
  position_gte: Int
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [ArticleMediaRestrictedWhereInput!]
}

input ArticleMediaScalarWhereInput {
  position: Int
  position_not: Int
  position_in: [Int!]
  position_not_in: [Int!]
  position_lt: Int
  position_lte: Int
  position_gt: Int
  position_gte: Int
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [ArticleMediaScalarWhereInput!]
  OR: [ArticleMediaScalarWhereInput!]
  NOT: [ArticleMediaScalarWhereInput!]
}

input ArticleMediaUpdateManyDataInput {
  position: Int
  url: String
}

input ArticleMediaUpdateManyInput {
  create: [ArticleMediaCreateInput!]
  deleteMany: [ArticleMediaScalarWhereInput!]
  updateMany: [ArticleMediaUpdateManyWithWhereNestedInput!]
}

input ArticleMediaUpdateManyWithWhereNestedInput {
  where: ArticleMediaScalarWhereInput!
  data: ArticleMediaUpdateManyDataInput!
}

input ArticleMediaWhereInput {
  position: Int
  position_not: Int
  position_in: [Int!]
  position_not_in: [Int!]
  position_lt: Int
  position_lte: Int
  position_gt: Int
  position_gte: Int
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [ArticleMediaWhereInput!]
}

enum ArticleOrderByInput {
  id_ASC
  id_DESC
  author_ASC
  author_DESC
  name_ASC
  name_DESC
  postTime_ASC
  postTime_DESC
}

type ArticlePreviousValues {
  id: ID!
  author: String
  name: String
  postTime: String
}

type ArticleSubscriptionPayload {
  mutation: MutationType!
  node: Article
  updatedFields: [String!]
  previousValues: ArticlePreviousValues
}

input ArticleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ArticleWhereInput
  AND: [ArticleSubscriptionWhereInput!]
}

type ArticleSubtitle {
  position: Int
  subitle: String
}

input ArticleSubtitleCreateInput {
  position: Int
  subitle: String
}

input ArticleSubtitleCreateManyInput {
  create: [ArticleSubtitleCreateInput!]
}

input ArticleSubtitleRestrictedWhereInput {
  position: Int
  position_not: Int
  position_in: [Int!]
  position_not_in: [Int!]
  position_lt: Int
  position_lte: Int
  position_gt: Int
  position_gte: Int
  subitle: String
  subitle_not: String
  subitle_in: [String!]
  subitle_not_in: [String!]
  subitle_lt: String
  subitle_lte: String
  subitle_gt: String
  subitle_gte: String
  subitle_contains: String
  subitle_not_contains: String
  subitle_starts_with: String
  subitle_not_starts_with: String
  subitle_ends_with: String
  subitle_not_ends_with: String
  AND: [ArticleSubtitleRestrictedWhereInput!]
}

input ArticleSubtitleScalarWhereInput {
  position: Int
  position_not: Int
  position_in: [Int!]
  position_not_in: [Int!]
  position_lt: Int
  position_lte: Int
  position_gt: Int
  position_gte: Int
  subitle: String
  subitle_not: String
  subitle_in: [String!]
  subitle_not_in: [String!]
  subitle_lt: String
  subitle_lte: String
  subitle_gt: String
  subitle_gte: String
  subitle_contains: String
  subitle_not_contains: String
  subitle_starts_with: String
  subitle_not_starts_with: String
  subitle_ends_with: String
  subitle_not_ends_with: String
  AND: [ArticleSubtitleScalarWhereInput!]
  OR: [ArticleSubtitleScalarWhereInput!]
  NOT: [ArticleSubtitleScalarWhereInput!]
}

input ArticleSubtitleUpdateManyDataInput {
  position: Int
  subitle: String
}

input ArticleSubtitleUpdateManyInput {
  create: [ArticleSubtitleCreateInput!]
  deleteMany: [ArticleSubtitleScalarWhereInput!]
  updateMany: [ArticleSubtitleUpdateManyWithWhereNestedInput!]
}

input ArticleSubtitleUpdateManyWithWhereNestedInput {
  where: ArticleSubtitleScalarWhereInput!
  data: ArticleSubtitleUpdateManyDataInput!
}

input ArticleSubtitleWhereInput {
  position: Int
  position_not: Int
  position_in: [Int!]
  position_not_in: [Int!]
  position_lt: Int
  position_lte: Int
  position_gt: Int
  position_gte: Int
  subitle: String
  subitle_not: String
  subitle_in: [String!]
  subitle_not_in: [String!]
  subitle_lt: String
  subitle_lte: String
  subitle_gt: String
  subitle_gte: String
  subitle_contains: String
  subitle_not_contains: String
  subitle_starts_with: String
  subitle_not_starts_with: String
  subitle_ends_with: String
  subitle_not_ends_with: String
  AND: [ArticleSubtitleWhereInput!]
}

type ArticleText {
  position: Int
  text: String
}

input ArticleTextCreateInput {
  position: Int
  text: String
}

input ArticleTextCreateManyInput {
  create: [ArticleTextCreateInput!]
}

input ArticleTextRestrictedWhereInput {
  position: Int
  position_not: Int
  position_in: [Int!]
  position_not_in: [Int!]
  position_lt: Int
  position_lte: Int
  position_gt: Int
  position_gte: Int
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  AND: [ArticleTextRestrictedWhereInput!]
}

input ArticleTextScalarWhereInput {
  position: Int
  position_not: Int
  position_in: [Int!]
  position_not_in: [Int!]
  position_lt: Int
  position_lte: Int
  position_gt: Int
  position_gte: Int
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  AND: [ArticleTextScalarWhereInput!]
  OR: [ArticleTextScalarWhereInput!]
  NOT: [ArticleTextScalarWhereInput!]
}

input ArticleTextUpdateManyDataInput {
  position: Int
  text: String
}

input ArticleTextUpdateManyInput {
  create: [ArticleTextCreateInput!]
  deleteMany: [ArticleTextScalarWhereInput!]
  updateMany: [ArticleTextUpdateManyWithWhereNestedInput!]
}

input ArticleTextUpdateManyWithWhereNestedInput {
  where: ArticleTextScalarWhereInput!
  data: ArticleTextUpdateManyDataInput!
}

input ArticleTextWhereInput {
  position: Int
  position_not: Int
  position_in: [Int!]
  position_not_in: [Int!]
  position_lt: Int
  position_lte: Int
  position_gt: Int
  position_gte: Int
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  AND: [ArticleTextWhereInput!]
}

type ArticleTitle {
  position: Int
  title: String
}

input ArticleTitleCreateInput {
  position: Int
  title: String
}

input ArticleTitleCreateManyInput {
  create: [ArticleTitleCreateInput!]
}

input ArticleTitleRestrictedWhereInput {
  position: Int
  position_not: Int
  position_in: [Int!]
  position_not_in: [Int!]
  position_lt: Int
  position_lte: Int
  position_gt: Int
  position_gte: Int
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [ArticleTitleRestrictedWhereInput!]
}

input ArticleTitleScalarWhereInput {
  position: Int
  position_not: Int
  position_in: [Int!]
  position_not_in: [Int!]
  position_lt: Int
  position_lte: Int
  position_gt: Int
  position_gte: Int
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [ArticleTitleScalarWhereInput!]
  OR: [ArticleTitleScalarWhereInput!]
  NOT: [ArticleTitleScalarWhereInput!]
}

input ArticleTitleUpdateManyDataInput {
  position: Int
  title: String
}

input ArticleTitleUpdateManyInput {
  create: [ArticleTitleCreateInput!]
  deleteMany: [ArticleTitleScalarWhereInput!]
  updateMany: [ArticleTitleUpdateManyWithWhereNestedInput!]
}

input ArticleTitleUpdateManyWithWhereNestedInput {
  where: ArticleTitleScalarWhereInput!
  data: ArticleTitleUpdateManyDataInput!
}

input ArticleTitleWhereInput {
  position: Int
  position_not: Int
  position_in: [Int!]
  position_not_in: [Int!]
  position_lt: Int
  position_lte: Int
  position_gt: Int
  position_gte: Int
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [ArticleTitleWhereInput!]
}

input ArticleUpdateInput {
  author: String
  media: ArticleMediaUpdateManyInput
  name: String
  postTime: String
  subtitles: ArticleSubtitleUpdateManyInput
  texts: ArticleTextUpdateManyInput
  titles: ArticleTitleUpdateManyInput
}

input ArticleUpdateManyMutationInput {
  author: String
  name: String
  postTime: String
}

input ArticleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  author: String
  author_not: String
  author_in: [String!]
  author_not_in: [String!]
  author_lt: String
  author_lte: String
  author_gt: String
  author_gte: String
  author_contains: String
  author_not_contains: String
  author_starts_with: String
  author_not_starts_with: String
  author_ends_with: String
  author_not_ends_with: String
  media_some: ArticleMediaWhereInput
  media_every: ArticleMediaRestrictedWhereInput
  media_none: ArticleMediaRestrictedWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  postTime: String
  postTime_not: String
  postTime_in: [String!]
  postTime_not_in: [String!]
  postTime_lt: String
  postTime_lte: String
  postTime_gt: String
  postTime_gte: String
  postTime_contains: String
  postTime_not_contains: String
  postTime_starts_with: String
  postTime_not_starts_with: String
  postTime_ends_with: String
  postTime_not_ends_with: String
  subtitles_some: ArticleSubtitleWhereInput
  subtitles_every: ArticleSubtitleRestrictedWhereInput
  subtitles_none: ArticleSubtitleRestrictedWhereInput
  texts_some: ArticleTextWhereInput
  texts_every: ArticleTextRestrictedWhereInput
  texts_none: ArticleTextRestrictedWhereInput
  titles_some: ArticleTitleWhereInput
  titles_every: ArticleTitleRestrictedWhereInput
  titles_none: ArticleTitleRestrictedWhereInput
  AND: [ArticleWhereInput!]
}

input ArticleWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createArticle(data: ArticleCreateInput!): Article!
  updateArticle(data: ArticleUpdateInput!, where: ArticleWhereUniqueInput!): Article
  updateManyArticles(data: ArticleUpdateManyMutationInput!, where: ArticleWhereInput): BatchPayload!
  upsertArticle(where: ArticleWhereUniqueInput!, create: ArticleCreateInput!, update: ArticleUpdateInput!): Article!
  deleteArticle(where: ArticleWhereUniqueInput!): Article
  deleteManyArticles(where: ArticleWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  article(where: ArticleWhereUniqueInput!): Article
  articles(where: ArticleWhereInput, orderBy: ArticleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Article]!
  articlesConnection(where: ArticleWhereInput, orderBy: ArticleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ArticleConnection!
  node(id: ID!): Node
}

type Subscription {
  article(where: ArticleSubscriptionWhereInput): ArticleSubscriptionPayload
}
`