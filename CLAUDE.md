# we-are-talking-about-practice

## Project
Node.js project using npm. Lock file: `package-lock.json`. Default branch: `master`.

## Security patching (last patched: 2026-03-04)
- `axios` is a **direct** dependency — update in `package.json`
- `qs`, `minimatch`, `ajv` are **transitive** (via express/body-parser from json-server, eslint, glob) — resolved by `npm audit fix`
- Note: `wakatime-client` has a peer dep on `axios@^0.19.0` — `npm audit fix --force` was needed to bypass this

### How to patch future vulnerabilities
```bash
npm audit
npm install <pkg>@<version>      # update direct deps
npm audit fix                    # fix transitive deps
npm audit fix --force            # if peer conflicts (review breaking changes)
npm audit                        # verify 0 vulnerabilities
```

If transitive deps can't be fixed by audit, add `"overrides"` in `package.json`:
```json
"overrides": {
  "vulnerable-pkg": "<safe-version>"
}
```
Then run `npm install` to apply.
