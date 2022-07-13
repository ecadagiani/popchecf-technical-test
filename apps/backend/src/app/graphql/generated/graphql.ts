/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../dataSources';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateRecipeIngredient = {
  id: Scalars['ID'];
  peopleNumber?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type Ingredient = {
  __typename?: 'Ingredient';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addIngredientToRecipe?: Maybe<Recipe>;
  createIngredient?: Maybe<Ingredient>;
  createRecipe?: Maybe<Recipe>;
  removeIngredientToRecipe?: Maybe<Recipe>;
  updateIngredient?: Maybe<Ingredient>;
  updateRecipe?: Maybe<Recipe>;
};

export type MutationAddIngredientToRecipeArgs = {
  id: Scalars['ID'];
  ingredientId: Scalars['ID'];
  peopleNumber?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type MutationCreateIngredientArgs = {
  name: Scalars['String'];
};

export type MutationCreateRecipeArgs = {
  content: Scalars['String'];
  ingredients?: InputMaybe<Array<InputMaybe<CreateRecipeIngredient>>>;
  title: Scalars['String'];
};

export type MutationRemoveIngredientToRecipeArgs = {
  id: Scalars['ID'];
  ingredientId: Scalars['ID'];
};

export type MutationUpdateIngredientArgs = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type MutationUpdateRecipeArgs = {
  content?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  ingredient?: Maybe<Ingredient>;
  ingredients?: Maybe<Array<Ingredient>>;
  recipe?: Maybe<Recipe>;
  recipes?: Maybe<Array<Recipe>>;
};

export type QueryIngredientArgs = {
  id: Scalars['ID'];
};

export type QueryRecipeArgs = {
  id: Scalars['ID'];
};

export type Recipe = {
  __typename?: 'Recipe';
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  ingredients?: Maybe<Array<Maybe<RecipeIngredient>>>;
  title?: Maybe<Scalars['String']>;
};

export type RecipeIngredient = {
  __typename?: 'RecipeIngredient';
  ingredient?: Maybe<Ingredient>;
  peopleNumber?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateRecipeIngredient: CreateRecipeIngredient;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Ingredient: ResolverTypeWrapper<Ingredient>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Recipe: ResolverTypeWrapper<Recipe>;
  RecipeIngredient: ResolverTypeWrapper<RecipeIngredient>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  CreateRecipeIngredient: CreateRecipeIngredient;
  ID: Scalars['ID'];
  Ingredient: Ingredient;
  Int: Scalars['Int'];
  Mutation: {};
  Query: {};
  Recipe: Recipe;
  RecipeIngredient: RecipeIngredient;
  String: Scalars['String'];
}>;

export type IngredientResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Ingredient'] = ResolversParentTypes['Ingredient']
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = ResolversObject<{
  addIngredientToRecipe?: Resolver<
    Maybe<ResolversTypes['Recipe']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddIngredientToRecipeArgs, 'id' | 'ingredientId'>
  >;
  createIngredient?: Resolver<
    Maybe<ResolversTypes['Ingredient']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateIngredientArgs, 'name'>
  >;
  createRecipe?: Resolver<
    Maybe<ResolversTypes['Recipe']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateRecipeArgs, 'content' | 'title'>
  >;
  removeIngredientToRecipe?: Resolver<
    Maybe<ResolversTypes['Recipe']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveIngredientToRecipeArgs, 'id' | 'ingredientId'>
  >;
  updateIngredient?: Resolver<
    Maybe<ResolversTypes['Ingredient']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateIngredientArgs, 'id'>
  >;
  updateRecipe?: Resolver<
    Maybe<ResolversTypes['Recipe']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateRecipeArgs, 'id'>
  >;
}>;

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  ingredient?: Resolver<
    Maybe<ResolversTypes['Ingredient']>,
    ParentType,
    ContextType,
    RequireFields<QueryIngredientArgs, 'id'>
  >;
  ingredients?: Resolver<
    Maybe<Array<ResolversTypes['Ingredient']>>,
    ParentType,
    ContextType
  >;
  recipe?: Resolver<
    Maybe<ResolversTypes['Recipe']>,
    ParentType,
    ContextType,
    RequireFields<QueryRecipeArgs, 'id'>
  >;
  recipes?: Resolver<
    Maybe<Array<ResolversTypes['Recipe']>>,
    ParentType,
    ContextType
  >;
}>;

export type RecipeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Recipe'] = ResolversParentTypes['Recipe']
> = ResolversObject<{
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  ingredients?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['RecipeIngredient']>>>,
    ParentType,
    ContextType
  >;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RecipeIngredientResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['RecipeIngredient'] = ResolversParentTypes['RecipeIngredient']
> = ResolversObject<{
  ingredient?: Resolver<
    Maybe<ResolversTypes['Ingredient']>,
    ParentType,
    ContextType
  >;
  peopleNumber?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Ingredient?: IngredientResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Recipe?: RecipeResolvers<ContextType>;
  RecipeIngredient?: RecipeIngredientResolvers<ContextType>;
}>;
