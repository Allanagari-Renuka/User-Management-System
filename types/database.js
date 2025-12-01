
/**
 * @typedef {Object} Profile
 * @property {string} id
 * @property {string|null} name
 * @property {string|null} email
 * @property {string|null} phone
 * @property {string|null} profile_image
 * @property {string|null} address
 * @property {string|null} state
 * @property {string|null} city
 * @property {string|null} country
 * @property {string|null} pincode
 * @property {"admin" | "user"} role
 * @property {string} created_at
 * @property {string} updated_at
 */

/**
 * Profile data when inserting a new record (without auto-generated timestamps)
 * @typedef {Omit<Profile, "created_at" | "updated_at">} ProfileInsert
 */

/**
 * Profile data when updating an existing record (partial, excluding immutable fields)
 * @typedef {Partial<Omit<Profile, "id" | "created_at" | "updated_at">>} ProfileUpdate
 */