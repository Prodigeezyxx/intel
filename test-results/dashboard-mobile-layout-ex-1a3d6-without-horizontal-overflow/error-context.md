# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard.spec.js >> mobile layout exposes bottom navigation without horizontal overflow
- Location: tests\dashboard.spec.js:34:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.mobile-bottom [data-view="missions"]')
    - locator resolved to <button data-view="missions">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#main"
  - generic [ref=e3]:
    - generic [ref=e4]:
      - complementary "Primary navigation" [ref=e5]:
        - generic [ref=e6]:
          - generic [ref=e7]: TSL
          - generic [ref=e8]:
            - strong [ref=e9]: National Resilience Twin
            - generic [ref=e10]: Strategy foundation • v1
        - generic [ref=e11]: Strategy workspace
        - navigation [ref=e12]:
          - button "National twin" [ref=e13] [cursor=pointer]:
            - generic [aria-hidden] [ref=e14]: dashboard
          - button "Mission threads" [ref=e16] [cursor=pointer]:
            - generic [aria-hidden] [ref=e17]: crisis_alert
          - button "Offer portfolio" [ref=e19] [cursor=pointer]:
            - generic [aria-hidden] [ref=e20]: deployed_code
          - button "Knowledge graph" [ref=e22] [cursor=pointer]:
            - generic [aria-hidden] [ref=e23]: hub
          - button "Roadmap" [ref=e25] [cursor=pointer]:
            - generic [aria-hidden] [ref=e26]: conversion_path
          - button "Governance" [ref=e28] [cursor=pointer]:
            - generic [aria-hidden] [ref=e29]: policy
          - button "Sources" [ref=e31] [cursor=pointer]:
            - generic [aria-hidden] [ref=e32]: library_books
        - generic [ref=e34]:
          - strong [ref=e35]:
            - generic [aria-hidden] [ref=e36]: verified_user
            - text: Bounded prototype
          - text: No live operations, personal data, target locations or autonomous enforcement.
      - generic [ref=e37]:
        - banner [ref=e38]:
          - button "Open navigation" [ref=e39] [cursor=pointer]:
            - generic [aria-hidden] [ref=e40]: menu
          - generic [ref=e41]:
            - strong [ref=e42]: National twin
            - generic [ref=e43]: Prepared by TSL Logistics • KONGSBERG + Exail opportunity architecture
          - generic [ref=e44]:
            - button "Open executive brief" [ref=e45] [cursor=pointer]:
              - generic [aria-hidden] [ref=e46]: description
            - button "Toggle colour theme" [ref=e47] [cursor=pointer]:
              - generic [aria-hidden] [ref=e48]: contrast
        - main [ref=e49]:
          - generic [ref=e50]:
            - generic [ref=e51]:
              - generic [ref=e52]:
                - generic [ref=e53]: TSL Logistics strategic intelligence
                - heading "One national resilience picture. Multiple accountable owners." [level=1] [ref=e54]
                - paragraph [ref=e55]: A high-level digital twin joining security missions, critical services, hydrography, maritime awareness, infrastructure integrity and delivery readiness—without creating a centralised surveillance state.
              - generic [ref=e56]:
                - generic [aria-hidden] [ref=e57]: info
                - text: Illustrative, national-level strategy. Validate every score and integration during formal discovery.
            - generic [ref=e58]:
              - article [ref=e59]:
                - generic [ref=e60]:
                  - generic [ref=e61]: Mission portfolios
                  - generic [aria-hidden] [ref=e62]: trending_up
                - generic [ref=e63]: "06"
                - text: prioritised national threads
              - article [ref=e66]:
                - generic [ref=e67]:
                  - generic [ref=e68]: Offer modules
                  - generic [aria-hidden] [ref=e69]: trending_up
                - generic [ref=e70]: 30+
                - text: grouped for procurement
              - article [ref=e73]:
                - generic [ref=e74]:
                  - generic [ref=e75]: Pilot horizon
                  - generic [aria-hidden] [ref=e76]: trending_up
                - generic [ref=e77]: 90 days
                - text: to approved scope
              - article [ref=e80]:
                - generic [ref=e81]:
                  - generic [ref=e82]: Design posture
                  - generic [aria-hidden] [ref=e83]: trending_up
                - generic [ref=e84]: Federated
                - text: sovereign by default
            - generic [ref=e87]:
              - article [ref=e88]:
                - generic [ref=e89]:
                  - generic [ref=e90]:
                    - strong [ref=e91]: Nigeria resilience twin
                    - generic [ref=e92]: 37 state/FCT boundaries • aggregated zonal planning profiles
                  - generic "Map display" [ref=e93]:
                    - button "Readiness" [ref=e94] [cursor=pointer]
                    - button "Mission" [ref=e95] [cursor=pointer]
                - generic [ref=e96]:
                  - img "Interactive map of Nigeria states coloured by illustrative zonal readiness priority" [ref=e97]:
                    - img "Nigeria state boundaries by aggregated zonal planning profile" [ref=e98]:
                      - button "Cross River, South South" [ref=e99] [cursor=pointer]
                      - button "Abuja Federal Capital Territory, North Central" [ref=e100] [cursor=pointer]
                      - button "Ogun, South West" [ref=e101] [cursor=pointer]
                      - button "Oyo, South West" [ref=e102] [cursor=pointer]
                      - button "Sokoto, North West" [ref=e103] [cursor=pointer]
                      - button "Zamfara, North West" [ref=e104] [cursor=pointer]
                      - button "Lagos, South West" [ref=e105] [cursor=pointer]
                      - button "Akwa Ibom, South South" [ref=e106] [cursor=pointer]
                      - button "Bayelsa, South South" [ref=e107] [cursor=pointer]
                      - button "Ondo, South West" [ref=e108] [cursor=pointer]
                      - button "Delta, South South" [ref=e109] [cursor=pointer]
                      - button "Rivers, South South" [ref=e110] [cursor=pointer]
                      - button "Kwara, North Central" [ref=e111] [cursor=pointer]
                      - button "Kogi, North Central" [ref=e112] [cursor=pointer]
                      - button "Benue, North Central" [ref=e113] [cursor=pointer]
                      - button "Borno, North East" [ref=e114] [cursor=pointer]
                      - button "Katsina, North West" [ref=e115] [cursor=pointer]
                      - button "Plateau, North Central" [ref=e116] [cursor=pointer]
                      - button "Edo, South South" [ref=e117] [cursor=pointer]
                      - button "Jigawa, North West" [ref=e118] [cursor=pointer]
                      - button "Anambra, South East" [ref=e119] [cursor=pointer]
                      - button "Kano, North West" [ref=e120] [cursor=pointer]
                      - button "Nasarawa, North Central" [ref=e121] [cursor=pointer]
                      - button "Kebbi, North West" [ref=e122] [cursor=pointer]
                      - button "Imo, South East" [ref=e123] [cursor=pointer]
                      - button "Gombe, North East" [ref=e124] [cursor=pointer]
                      - button "Adamawa, North East" [ref=e125] [cursor=pointer]
                      - button "Yobe, North East" [ref=e126] [cursor=pointer]
                      - button "Abia, South East" [ref=e127] [cursor=pointer]
                      - button "Ekiti, South West" [ref=e128] [cursor=pointer]
                      - button "Osun, South West" [ref=e129] [cursor=pointer]
                      - button "Bauchi, North East" [ref=e130] [cursor=pointer]
                      - button "Niger, North Central" [ref=e131] [cursor=pointer]
                      - button "Kaduna, North West" [ref=e132] [cursor=pointer]
                      - button "Enugu, South East" [ref=e133] [cursor=pointer]
                      - button "Taraba, North East" [ref=e134] [cursor=pointer]
                      - button "Ebonyi, South East" [ref=e135] [cursor=pointer]
                  - generic [ref=e136]:
                    - generic [ref=e137]: Lower planning priority
                    - generic [ref=e141]: Higher
              - complementary [ref=e142]:
                - generic [ref=e143]:
                  - generic [ref=e144]:
                    - strong [ref=e145]: Nigeria
                    - generic [ref=e146]: National strategic baseline
                  - generic [aria-hidden] [ref=e147]: travel_explore
                - generic [ref=e148]:
                  - generic [ref=e149]:
                    - generic [ref=e150]:
                      - generic [ref=e151]: Illustrative priority index
                      - generic [ref=e152]: "71"
                    - generic [ref=e153]: "Confidence: Medium"
                  - generic [ref=e154]:
                    - generic [ref=e155]: Planning posture
                    - heading "Federated resilience" [level=3] [ref=e156]
                    - paragraph [ref=e157]: A composite planning baseline across six public-outcome missions. It is not a current threat level or operational assessment.
                  - generic [ref=e158]:
                    - generic [ref=e159]: Mission emphasis
                    - list [ref=e160]:
                      - listitem [ref=e161]: Protect people and territory
                      - listitem [ref=e162]: Secure prosperity and critical services
                      - listitem [ref=e163]: Strengthen accountable coordination
                  - generic [ref=e164]:
                    - strong [ref=e165]: TSL priority move
                    - text: Fund discovery, two lighthouse pilots, sovereign data governance and Nigerian lifecycle capacity before national scale.
                  - generic [ref=e166]:
                    - generic [aria-hidden] [ref=e167]: lock
                    - text: Aggregated planning content only. No live incidents, precise assets or tactical indicators.
            - generic [ref=e168]:
              - article [ref=e169]:
                - generic [ref=e170]:
                  - strong [ref=e171]: Indicative delivery pulse
                  - generic [ref=e172]: Illustrative workstream load—not incident volume
              - article [ref=e186]:
                - generic [ref=e187]:
                  - strong [ref=e188]: Architecture at a glance
                  - generic [ref=e189]: What the first national platform must connect
                - generic [ref=e190]:
                  - generic [ref=e191]:
                    - strong [ref=e192]: Sense
                    - text: authorised field, maritime, asset and public data
                  - generic [ref=e193]:
                    - strong [ref=e194]: Understand
                    - text: knowledge graph, models, provenance and confidence
                  - generic [ref=e195]:
                    - strong [ref=e196]: Coordinate
                    - text: referrals, resources, evidence and recovery
    - navigation "Mobile navigation" [ref=e197]:
      - button "National twin" [ref=e198]:
        - generic [aria-hidden] [ref=e199]: dashboard
      - button "Mission" [ref=e201]:
        - generic [aria-hidden] [ref=e202]: crisis_alert
      - button "Offer" [ref=e204]:
        - generic [aria-hidden] [ref=e205]: deployed_code
      - button "Knowledge graph" [ref=e207]:
        - generic [aria-hidden] [ref=e208]: hub
      - button "Roadmap" [ref=e210]:
        - generic [aria-hidden] [ref=e211]: conversion_path
    - status [ref=e213]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('dashboard loads map and primary views', async ({ page }) => {
  4  |   await page.goto('/');
  5  |   await expect(page).toHaveTitle(/TSL National Resilience Twin/);
  6  |   await expect(page.locator('.state')).toHaveCount(37);
  7  |   await expect(page.locator('#inspector-title')).toHaveText('Nigeria');
  8  |   await page.locator('.state').first().click();
  9  |   await expect(page.locator('#inspector-title')).not.toHaveText('Nigeria');
  10 |   await page.getByRole('button',{name:'Mission threads'}).click();
  11 |   await expect(page.locator('.mission-card')).toHaveCount(6);
  12 |   await page.locator('.mission-card').first().click();
  13 |   await expect(page.locator('#mission-detail')).toHaveClass(/open/);
  14 | });
  15 | 
  16 | test('offer tabs, graph, sources and theme are interactive', async ({ page }) => {
  17 |   await page.goto('/#offerings');
  18 |   await expect(page.locator('.offer-item')).toHaveCount(6);
  19 |   await page.getByRole('tab',{name:/Technology solutions/}).click();
  20 |   await expect(page.locator('.offer-item')).toHaveCount(8);
  21 |   await page.getByRole('button',{name:'Knowledge graph'}).click();
  22 |   await expect(page.locator('.node')).toHaveCount(12);
  23 |   await page.locator('.node').nth(2).click();
  24 |   await expect(page.locator('#graph-inspector')).toContainText('KONGSBERG');
  25 |   await page.getByRole('button',{name:'Sources'}).click();
  26 |   await expect(page.locator('.source-card')).toHaveCount(12);
  27 |   await page.locator('#source-search').fill('Exail');
  28 |   await expect(page.locator('.source-card')).toHaveCount(2);
  29 |   const before=await page.locator('html').getAttribute('data-theme');
  30 |   await page.locator('#theme').click();
  31 |   await expect(page.locator('html')).not.toHaveAttribute('data-theme',before);
  32 | });
  33 | 
  34 | test('mobile layout exposes bottom navigation without horizontal overflow', async ({ page }) => {
  35 |   await page.setViewportSize({width:390,height:844});
  36 |   await page.goto('/');
  37 |   await expect(page.locator('.mobile-bottom')).toBeVisible();
  38 |   const widths=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,client:document.documentElement.clientWidth}));
  39 |   expect(widths.scroll).toBeLessThanOrEqual(widths.client+1);
> 40 |   await page.locator('.mobile-bottom [data-view="missions"]').click();
     |                                                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  41 |   await expect(page.locator('#view-missions')).toHaveClass(/active/);
  42 | });
  43 | 
```