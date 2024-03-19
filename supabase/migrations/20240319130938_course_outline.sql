alter table "public"."course_outlines" alter column "user_id" set default auth.uid();

alter table "public"."course_outlines" disable row level security;

create policy "Enable insert for users based on user_id"
on "public"."course_outlines"
as permissive
for insert
to public
with check (true);



