describe('Super Over Web Page', function() {
  beforeAll(function() {
    // Create and append necessary HTML elements (unchanged)
  });

  it('should have a background image', function() {
    var body = document.querySelector('body');
    var backgroundImage = window.getComputedStyle(body).backgroundImage;
    expect(backgroundImage).toContain('superover-bg.png');
  });

  it('should have a logo of Super Over aligned in the center', function() {
    var logo = document.getElementById('logo');
    expect(logo).not.toBeNull();
    expect(logo.src).toContain('so-logo.png');
  });

  it('should have two divs with colors blue and green', function() {
    var team1 = document.getElementById('team1');
    var team2 = document.getElementById('team2');
    expect(team1).not.toBeNull();
    expect(team2).not.toBeNull();
    expect(window.getComputedStyle(team1).backgroundColor).toBe('rgb(0, 95, 162)');
    expect(window.getComputedStyle(team2).backgroundColor).toBe('rgb(31, 168, 61)');
  });

  it('should have a score card in both divs', function() {
    var scoreTeam1 = document.getElementById('score-team1');
    var wicketsTeam1 = document.getElementById('wickets-team1');
    var scoreTeam2 = document.getElementById('score-team2');
    var wicketsTeam2 = document.getElementById('wickets-team2');
    expect(scoreTeam1).not.toBeNull();
    expect(wicketsTeam1).not.toBeNull();
    expect(scoreTeam2).not.toBeNull();
    expect(wicketsTeam2).not.toBeNull();
  });

  it('should have two images for bat and reset', function() {
    var strikeButton = document.getElementById('strike');
    var resetButton = document.getElementById('reset');
    expect(strikeButton).not.toBeNull();
    expect(resetButton).not.toBeNull();
  });
});
