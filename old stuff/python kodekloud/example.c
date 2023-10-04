#include <stdio.h>
#include <conio.h>
#include <SDL.h>
 
int main() {
    SDL_Init(SDL_INIT_VIDEO);

    SDL_Window* window = SDL_CreateWindow("Graphics Output", SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED, 640, 480, SDL_WINDOW_SHOWN);
    SDL_Renderer* renderer = SDL_CreateRenderer(window, -1, 0);
    SDL_SetRenderDrawColor(renderer, 255, 255, 255, 255);
    SDL_RenderClear(renderer);

    SDL_Surface* surface;
    SDL_Texture* texture;
    SDL_Rect textRect;

    // Load font
    TTF_Init();
    TTF_Font* font = TTF_OpenFont("path/to/your/font.ttf", 32);
    SDL_Color textColor = { 0, 0, 0 };  // Black color

    // Create surface from text
    surface = TTF_RenderText_Solid(font, "bhupesh", textColor);

    // Create texture from surface
    texture = SDL_CreateTextureFromSurface(renderer, surface);

    // Set the position and dimensions of the text rectangle
    textRect.x = 200;
    textRect.y = 200;
    textRect.w = surface->w;
    textRect.h = surface->h;

    // Render the texture to the renderer
    SDL_RenderCopy(renderer, texture, NULL, &textRect);
    SDL_RenderPresent(renderer);

    SDL_Delay(2000);  // Delay for 2 seconds

    // Cleanup
    SDL_DestroyTexture(texture);
    SDL_FreeSurface(surface);
