import { test, expect } from '@playwright/test';

test.describe('Parcours utilisateur sur RUBRR', () => {
  
  test('Accéder à une question et envoyer une réponse', async ({ page }) => {
    await page.goto('https://rubrr.s3-main.oktopod.app/');
    await page.getByRole('link', { name: 'Html' }).click();

    await expect(page.getByRole('textbox')).toBeVisible();
    await page.getByRole('textbox').fill('On doit utiliser la balise <form>');
    await page.getByRole('button', { name: 'Répondre' }).click();

    await expect(page.getByRole('link', { name: 'Nouvelle question' })).toBeVisible();
  });

  test('Accéder à la recherche et rechercher un terme', async ({ page }) => {
    await page.goto('https://rubrr.s3-main.oktopod.app/');
    await page.getByRole('link', { name: '✨ Plus de 712 questions' }).click();

    await page.getByRole('textbox').fill('html');
    await page.getByRole('button', { name: 'Rechercher' }).click();

    await expect(page.locator('tr:nth-child(18) > td:nth-child(3) > .font-medium')).toBeVisible();
  });

  test('Accéder à un résultat de recherche et revenir en arrière', async ({ page }) => {
    await page.goto('https://rubrr.s3-main.oktopod.app/questions');
    await page.getByRole('textbox').fill('html');
    await page.getByRole('button', { name: 'Rechercher' }).click();

    await page.locator('tr:nth-child(18) > td:nth-child(3) > .font-medium').click();
    await expect(page.getByRole('link', { name: 'Retour' })).toBeVisible();
    await page.getByRole('link', { name: 'Retour' }).click();
    await page.getByRole('link', { name: 'Retour' }).click();
  });

  test('Retour à l\'accueil depuis la liste des questions', async ({ page }) => {
    await page.goto('https://rubrr.s3-main.oktopod.app/questions');
    await page.getByRole('link', { name: 'Liste des questions' }).click();
    await page.getByRole('link', { name: 'RUBRR' }).click();

    await expect(page).toHaveURL('https://rubrr.s3-main.oktopod.app/');
  });

});
