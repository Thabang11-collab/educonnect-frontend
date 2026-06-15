// Supabase integration readiness stub.
// Replace the placeholder values with your Supabase project values when ready.

export const supabaseClient = {
  projectId: '',
  url: '',
  key: '',
  auth: null,
  from: () => ({ select: () => Promise.resolve({ data: [] }) })
};

export const createSupabaseClient = () => {
  return supabaseClient;
};
