# This is Art


  I suppose I'm a bit confused why the world sucks so much

  I'm a trans man and a year after I came out I was paralyzed from the
  chest down because I had a set of blood tubes get crossed in my spine and it
  burst.  So I never really had the chance to experience my body as myself.

  I guess that's made me a bit salty.  A bit salty for missing my life.

  So I've created this paradox of a mindfuck.

  In which you can choose to get older, thus losing precious moments
  of your life, but also getting closer to the time in which everyone
  stops giving and absolute fuck about you, so you're free to be whoever you want.

  There's probably an ideal way to play the game.  It helps if you open the console. At least then, you know what you're up against.

  I don't really know where the conditions I put on this game came from.
  I was kinda high and I just put what I put.

  I imagine if you change the values, you get a new game of life.
  I really like Conway's.

  I like it because someone told me that emergent behavior of conways suggests that
  seemingly deterministic rules can create randomness.

  I don't like free will.  I've been beaten to near death by the seemingly random
  consequences of the universe.  But, if I had free will, that means I could've done something
  to avoid my shitty fate.  And that makes me more sad than living in the hell that was forced upon me.

  Whenever I tell people they don't have free will, they seem to believe I'd be able to predict their future.
  But determinism does not entail omniscience.

  There are really n different variables that go into the mental and physical health of a human being.
  I decided to focus on gender and money.  The money maths aren't mathing right now, you only ever really make money.
  But there is an American dream of sorts.

  I do find this to be more accurate to our experience than Conway's life.  In Conway's you choose the start state
  of the universe and let it run.  But, we don't choose our start.  And our start binds our choices, until we really have none.


## Game text

Text the game shows is moving into JSON files in `data/` so it can be edited without
touching `index.js`. So far `data/mean_things.json` holds the mean things people say to
you while you're under 18, keyed by age; each entry has a `text` and an optional `image`
(`src`, `alt`, `classes`).

`index.js` loads these files with `fetch()`, so open the game through a web server
(for example `python3 -m http.server` in this folder, then http://localhost:8000/),
not straight from disk.

## Deployment

Every push to `main` publishes the game to https://trippyhippies.org/trans-game/
with [s3deploy](https://github.com/bep/s3deploy), run through the
[ksell8/s3-deploy](https://github.com/ksell8/s3-deploy) action (`.github/workflows/deploy.yml`).
Pull requests only check that the site files can be staged and that the action installs s3deploy. The workflow signs in
to AWS with GitHub OIDC, so no AWS keys are stored in GitHub. Set these repository
variables (Settings > Secrets and variables > Actions > Variables); all four are
required and the deploy fails if one is missing:

- `AWS_ROLE_ARN`: the IAM role to assume. Its trust policy should allow
  `token.actions.githubusercontent.com` with audience `sts.amazonaws.com` and subject
  `repo:ksell8/kurts-trans-game-of-life:ref:refs/heads/main`.
- `AWS_REGION`: the bucket's region.
- `S3_BUCKET`: the bucket to upload to.
- `CLOUDFRONT_DISTRIBUTION_ID`: the CloudFront distribution in front of the site
  (`E32MLR8T1N3H7C`); its cache for `/trans-game/*` is invalidated after every deploy.

The role needs `s3:ListBucket` and `s3:GetBucketLocation` on the bucket,
`s3:PutObject`, `s3:PutObjectAcl` and `s3:DeleteObject` on `trans-game/*`, and
`cloudfront:GetDistribution` and `cloudfront:CreateInvalidation` on the distribution.
s3deploy only touches files under `trans-game/` and removes ones that are no longer
in the repo.
